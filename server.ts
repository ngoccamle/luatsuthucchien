import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini AI client server-side
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY || "",
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });

  // Health check endpoint
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", service: "luat-su-thuc-hanh-blog" });
  });

  // AI Legal Practice Assistant Endpoint
  app.post("/api/gemini/assist", async (req, res) => {
    try {
      const { prompt, mode = "advice" } = req.body;

      if (!prompt) {
        return res.status(400).json({ error: "Vui lòng nhập câu hỏi hoặc tình huống cần tư vấn." });
      }

      if (!process.env.GEMINI_API_KEY) {
        return res.status(500).json({ 
          error: "Chưa cấu hình GEMINI_API_KEY. Vui lòng cập nhật API key trong mục Secrets/Cấu hình." 
        });
      }

      let systemInstruction = `Bạn là Trợ Lý Kỹ Năng Nghề Luật Sư - một Luật sư Trưởng cấp cao (Partner) giàu kinh nghiệm thực chiến tại Việt Nam (hơn 15 năm kinh nghiệm tranh tụng, tư vấn doanh nghiệp, M&A và soạn thảo hợp đồng).
Nhiệm vụ của bạn là đưa ra lời khuyên THỰC TẾ, CỤ THỂ, RÕ RÀNG, CHUYÊN NGHIỆP và DỄ ÁP DỤNG cho các Luật sư trẻ, Luật sư tập sự, Chuyên viên pháp lý.

Quy tắc phản hồi:
1. Trả lời bằng tiếng Việt chuyên nghiệp nhưng dễ hiểu, có bố cục gạch đầu dòng rõ ràng.
2. Nêu rõ các bước thực hành (Step-by-step), các rủi ro pháp lý cần tránh (Legal Red Flags), và kinh nghiệm ứng xử thực tế (Pro Tips).
3. Đưa ra ví dụ hoặc mẫu điều khoản/mẫu câu hỏi minh họa nếu áp dụng được.
4. Trích dẫn định hướng văn bản pháp luật áp dụng hiện hành tại Việt Nam khi cần thiết (Bộ luật Dân sự, Bộ luật Tố tụng, Luật Thương mại, v.v.).
5. Lưu ý cuối bài: Nhắc nhở ngắn gọn đây là gợi ý thực hành kinh nghiệm, luật sư cần áp dụng linh hoạt theo hồ sơ cụ thể.`;

      if (mode === "contract_review") {
        systemInstruction += `\nTrọng tâm lần này: Phân tích và đưa ra checklist rủi ro, điểm hở và điều khoản bảo vệ khi kiểm tra hợp đồng theo yêu cầu người dùng.`;
      } else if (mode === "court_skills") {
        systemInstruction += `\nTrọng tâm lần me: Kỹ năng tranh tụng tại phiên tòa, kỹ năng hỏi nhân chứng, đối đáp với Kiểm sát viên, Hội đồng xét xử hoặc xây dựng bài luận cứ.`;
      } else if (mode === "client_consult") {
        systemInstruction += `\nTrọng tâm lần này: Kỹ năng giao tiếp, tiếp xúc khách hàng, chốt phí dịch vụ legal retainer/mức thù lao, xử lý kỳ vọng của khách hàng.`;
      }

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: prompt,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      const replyText = response.text || "Không nhận được phản hồi từ AI.";
      return res.json({ reply: replyText });

    } catch (error: any) {
      console.error("Gemini API Error:", error);
      return res.status(500).json({ 
        error: "Đã xảy ra lỗi khi kết nối với Trợ lý AI. Vui lòng thử lại sau.",
        details: error?.message 
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server Luật Sư Thực Hành running on http://localhost:${PORT}`);
  });
}

startServer();
