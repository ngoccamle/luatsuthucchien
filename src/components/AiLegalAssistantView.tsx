import React, { useState } from "react";
import { Sparkles, Send, Bot, User, FileText, Compass, ShieldAlert, RefreshCw, Copy, Check } from "lucide-react";

export const AiLegalAssistantView: React.FC = () => {
  const [promptInput, setPromptInput] = useState("");
  const [mode, setMode] = useState<"advice" | "contract_review" | "court_skills" | "client_consult">("advice");
  const [messages, setMessages] = useState<Array<{ sender: "user" | "ai"; text: string; modeTag?: string }>>([
    {
      sender: "ai",
      text: `Xin chào Luật sư! Tôi là Trợ Lý Kỹ Năng Nghề Luật (được huấn luyện theo kinh nghiệm của các Luật sư Cấp cao tại Việt Nam). 

Bạn có thể đặt câu hỏi về:
- Kỹ năng đàm phán hợp đồng & điều khoản rủi ro
- Kỹ năng tư vấn, tiếp xúc khách hàng & báo phí Retainer
- Kỹ năng tranh tụng tại Tòa & xét hỏi nhân chứng
- Xử lý tình huống đạo đức nghề nghiệp

Hãy chọn chế độ hỗ trợ bên dưới hoặc nhập trực tiếp câu hỏi của bạn!`,
      modeTag: "Tổng quan"
    }
  ]);

  const [loading, setLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleSendPrompt = async (textToSend?: string) => {
    const finalPrompt = textToSend || promptInput;
    if (!finalPrompt.trim() || loading) return;

    const userMessage = { sender: "user" as const, text: finalPrompt };
    setMessages(prev => [...prev, userMessage]);
    setPromptInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/gemini/assist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: finalPrompt, mode })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Không thể nhận phản hồi từ hệ thống.");
      }

      const aiReply = { sender: "ai" as const, text: data.reply, modeTag: getModeLabel(mode) };
      setMessages(prev => [...prev, aiReply]);
    } catch (err: any) {
      const errorReply = {
        sender: "ai" as const,
        text: `⚠️ Lỗi: ${err.message || "Đã xảy ra lỗi khi xử lý. Vui lòng thử lại sau."}`,
        modeTag: "Lỗi"
      };
      setMessages(prev => [...prev, errorReply]);
    } finally {
      setLoading(false);
    }
  };

  const getModeLabel = (m: string) => {
    switch (m) {
      case "contract_review": return "Rà soát Hợp đồng";
      case "court_skills": return "Kỹ năng Tranh tụng";
      case "client_consult": return "Tư vấn Khách hàng";
      default: return "Cố vấn Nghề Luật";
    }
  };

  const handleCopyText = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const quickPrompts = [
    "Các lỗi thường gặp nhất khi soạn điều khoản Phạt vi phạm trong hợp đồng thương mại?",
    "Quy trình 5 bước đàm phán thù lao tư vấn Retainer cho doanh nghiệp vừa và nhỏ?",
    "Kỹ năng đặt câu hỏi đóng với nhân chứng tại phiên tòa dân sự khi họ khai sai sự thật?",
    "Mẫu checklist kiểm tra hợp đồng sáp nhập M&A doanh nghiệp bao gồm những gì?"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 animate-fadeIn">
      
      {/* Top Banner */}
      <div className="bg-[#1A1A1A] p-6 sm:p-8 text-white border border-[#333333] space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#282828] border border-[#3E3E3E] text-[#9A8C73] text-[11px] font-bold uppercase tracking-[0.15em]">
          <Sparkles className="w-3.5 h-3.5 text-[#9A8C73]" />
          <span>Trợ Lý AI Kỹ Năng Nghề Luật Sư (Powered by Gemini)</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-serif font-bold">
          Cố Vấn & Trợ Lý Nghề Luật Trực Tuyến
        </h1>

        <p className="text-[#AAAAAA] text-sm max-w-3xl leading-relaxed">
          Hỏi bất kỳ câu hỏi nghiệp vụ nào về soạn thảo văn bản, kỹ năng đối đáp tại Tòa hay phương pháp làm việc với khách hàng để nhận hướng dẫn chi tiết từ Trợ lý AI.
        </p>

        {/* Mode Selectors */}
        <div className="flex flex-wrap gap-2 pt-2">
          <button
            onClick={() => setMode("advice")}
            className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              mode === "advice"
                ? "bg-white text-[#1A1A1A]"
                : "bg-[#282828] text-[#CCCCCC] hover:bg-[#383838] hover:text-white"
            }`}
          >
            Chung (Cố vấn Nghề)
          </button>

          <button
            onClick={() => setMode("contract_review")}
            className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              mode === "contract_review"
                ? "bg-white text-[#1A1A1A]"
                : "bg-[#282828] text-[#CCCCCC] hover:bg-[#383838] hover:text-white"
            }`}
          >
            Rà soát Hợp đồng
          </button>

          <button
            onClick={() => setMode("court_skills")}
            className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              mode === "court_skills"
                ? "bg-white text-[#1A1A1A]"
                : "bg-[#282828] text-[#CCCCCC] hover:bg-[#383838] hover:text-white"
            }`}
          >
            Kỹ năng Tranh tụng
          </button>

          <button
            onClick={() => setMode("client_consult")}
            className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              mode === "client_consult"
                ? "bg-white text-[#1A1A1A]"
                : "bg-[#282828] text-[#CCCCCC] hover:bg-[#383838] hover:text-white"
            }`}
          >
            Tư vấn Khách hàng
          </button>
        </div>
      </div>

      {/* Quick Prompts Bar */}
      <div className="space-y-2">
        <span className="text-[11px] font-bold text-[#9A8C73] uppercase tracking-[0.15em]">
          Gợi ý câu hỏi thực chiến nhanh:
        </span>
        <div className="grid sm:grid-cols-2 gap-2">
          {quickPrompts.map((qp, idx) => (
            <button
              key={idx}
              onClick={() => handleSendPrompt(qp)}
              className="p-3 text-left bg-white hover:bg-[#F3F1ED] border border-[#E5E1D8] hover:border-[#1A1A1A] text-xs text-[#1A1A1A] transition-all font-medium flex items-center justify-between group cursor-pointer"
            >
              <span className="line-clamp-1">{qp}</span>
              <Sparkles className="w-3.5 h-3.5 text-[#9A8C73] shrink-0 ml-2" />
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages Box */}
      <div className="bg-white border border-[#E5E1D8] flex flex-col h-[520px] overflow-hidden">
        
        {/* Messages Scroll Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-[#FAF9F6]">
          {messages.map((msg, index) => {
            const isUser = msg.sender === "user";
            return (
              <div
                key={index}
                className={`flex gap-3 max-w-3xl ${isUser ? "ml-auto flex-row-reverse" : ""}`}
              >
                <div className={`w-8 h-8 flex items-center justify-center shrink-0 ${
                  isUser ? "bg-[#1A1A1A] text-white" : "bg-[#1A1A1A] text-white font-bold"
                }`}>
                  {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>

                <div className={`space-y-1.5 ${isUser ? "text-right" : ""}`}>
                  {msg.modeTag && (
                    <span className="text-[10px] font-mono text-[#666666] bg-[#E5E1D8] px-2 py-0.5 uppercase tracking-wider">
                      {msg.modeTag}
                    </span>
                  )}

                  <div className={`p-4 text-xs leading-relaxed whitespace-pre-wrap border ${
                    isUser
                      ? "bg-[#1A1A1A] text-white border-[#1A1A1A]"
                      : "bg-white border-[#E5E1D8] text-[#1A1A1A] space-y-2"
                  }`}>
                    {msg.text}
                  </div>

                  {!isUser && (
                    <button
                      onClick={() => handleCopyText(msg.text, index)}
                      className="inline-flex items-center gap-1 text-[11px] text-[#666666] hover:text-[#1A1A1A] transition-colors pt-0.5 cursor-pointer font-medium"
                    >
                      {copiedIndex === index ? <Check className="w-3 h-3 text-[#1A1A1A]" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedIndex === index ? "Đã chép" : "Sao chép câu trả lời"}</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}

          {loading && (
            <div className="flex items-center gap-3 text-[#666666] text-xs py-2">
              <Bot className="w-5 h-5 text-[#9A8C73] animate-spin" />
              <span>Trợ lý AI đang phân tích và tổng hợp kinh nghiệm thực chiến...</span>
            </div>
          )}
        </div>

        {/* Input Footer */}
        <div className="p-4 bg-white border-t border-[#E5E1D8]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendPrompt();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              placeholder={`Nhập câu hỏi kỹ năng (${getModeLabel(mode)})...`}
              value={promptInput}
              onChange={(e) => setPromptInput(e.target.value)}
              className="flex-1 bg-[#F3F1ED] border border-[#E5E1D8] px-4 py-2.5 text-xs text-[#1A1A1A] placeholder-[#888888] focus:outline-none focus:border-[#1A1A1A]"
            />
            <button
              type="submit"
              disabled={loading || !promptInput.trim()}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#1A1A1A] hover:bg-[#333333] disabled:opacity-50 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Gửi</span>
            </button>
          </form>
        </div>

      </div>

    </div>
  );
};
