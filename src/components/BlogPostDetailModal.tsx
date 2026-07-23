import React, { useState } from "react";
import { BlogPost, Comment } from "../types";
import { 
  X, Clock, Eye, ThumbsUp, Bookmark, Share2, Printer, CheckCircle2, 
  MessageSquare, Send, FileCheck, ArrowRight, BookOpen, AlertTriangle
} from "lucide-react";

interface BlogPostDetailModalProps {
  post: BlogPost | null;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (postId: string) => void;
  isLiked: boolean;
  onToggleLike: (postId: string) => void;
  onNavigateToChecklist?: (checklistId: string) => void;
}

export const BlogPostDetailModal: React.FC<BlogPostDetailModalProps> = ({
  post,
  onClose,
  isBookmarked,
  onToggleBookmark,
  isLiked,
  onToggleLike,
  onNavigateToChecklist,
}) => {
  if (!post) return null;

  // Local comments state
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "c1",
      author: "Luật sư Phạm Quốc Tuấn",
      role: "Luật sư tranh tụng",
      content: "Bài viết chia sẻ rất đúng thực tế. Ở khoản 3 Điều 301 Luật Thương mại, tôi luôn khuyên luật sư trẻ phải đặc biệt lưu ý cách tính giá trị phần nghĩa vụ bị vi phạm.",
      date: "19/07/2026",
      likes: 12
    },
    {
      id: "c2",
      author: "Lê Minh Trang",
      role: "Chuyên viên Pháp lý Doanh nghiệp",
      content: "Mẫu điều khoản đàm phán rất hữu ích! Tôi đã lưu lại áp dụng cho đợt rà soát hợp đồng mua bán linh kiện tuần này.",
      date: "18/07/2026",
      likes: 8
    }
  ]);

  const [newCommentAuthor, setNewCommentAuthor] = useState("");
  const [newCommentText, setNewCommentText] = useState("");
  const [copied, setCopied] = useState(false);

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;

    const newComment: Comment = {
      id: "c_" + Date.now(),
      author: newCommentAuthor.trim() || "Độc giả Nghề Luật",
      role: "Luật sư / Chuyên viên pháp lý",
      content: newCommentText.trim(),
      date: "Vừa xong",
      likes: 0
    };

    setComments([newComment, ...comments]);
    setNewCommentText("");
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1A1A1A]/80 backdrop-blur-xs flex justify-center p-2 sm:p-4 md:p-6 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#FAF9F6] border border-[#E5E1D8] overflow-hidden my-auto flex flex-col max-h-[92vh]">
        
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-20 bg-[#1A1A1A] text-white px-6 py-4 flex items-center justify-between border-b border-[#333333]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 bg-[#262626] text-[#9A8C73] border border-[#3E3E3E] text-xs font-bold uppercase tracking-[0.15em]">
              {post.category}
            </span>
            <span className="text-xs text-[#AAAAAA] hidden sm:inline">• {post.readTime} phút đọc</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleBookmark(post.id)}
              className={`p-2 transition-colors cursor-pointer ${
                isBookmarked ? "bg-white text-[#1A1A1A] font-bold" : "text-[#CCCCCC] hover:bg-[#333333]"
              }`}
              title="Lưu bài viết"
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-[#1A1A1A]" : ""}`} />
            </button>

            <button
              onClick={handleShare}
              className="p-2 text-[#CCCCCC] hover:bg-[#333333] transition-colors cursor-pointer"
              title="Sao chép liên kết chia sẻ"
            >
              <Share2 className="w-4 h-4" />
            </button>

            <button
              onClick={handlePrint}
              className="p-2 text-[#CCCCCC] hover:bg-[#333333] transition-colors hidden sm:inline-flex cursor-pointer"
              title="In bài viết"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-2 text-[#AAAAAA] hover:text-white hover:bg-[#333333] transition-colors ml-2 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 text-[#1A1A1A]">
          
          {/* Article Header */}
          <header className="space-y-4 pb-6 border-b border-[#E5E1D8]">
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#9A8C73] font-bold uppercase tracking-wider">
              <span className="px-2 py-0.5 bg-[#F3F1ED] border border-[#E5E1D8] text-[#1A1A1A]">
                {post.experienceLevel}
              </span>
              <span>• Đăng ngày {post.date}</span>
              <span>• {post.views} lượt xem</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1A1A1A] leading-tight">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-[#555555] font-medium leading-relaxed italic">
              "{post.subtitle}"
            </p>

            {/* Author Bar */}
            <div className="flex items-center gap-3 pt-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-11 h-11 rounded-full object-cover border border-[#E5E1D8]"
              />
              <div>
                <div className="font-bold text-[#1A1A1A] text-sm">{post.author.name}</div>
                <div className="text-xs text-[#666666]">{post.author.title} • {post.author.lawFirm}</div>
              </div>
            </div>
          </header>

          {/* Key Takeaways Callout Box */}
          {post.keyTakeaways && post.keyTakeaways.length > 0 && (
            <div className="p-5 bg-[#F3F1ED] border border-[#E5E1D8] space-y-3">
              <div className="flex items-center gap-2 font-bold text-[#1A1A1A] text-xs uppercase tracking-[0.15em]">
                <FileCheck className="w-5 h-5 text-[#9A8C73]" />
                <span>Nội dung thực chiến trọng tâm (Key Takeaways):</span>
              </div>
              <ul className="space-y-2 text-sm text-[#333333]">
                {post.keyTakeaways.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#9A8C73] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Download / Interactive Checklist Link */}
              {post.downloadChecklistId && (
                <div className="pt-2">
                  <button
                    onClick={() => {
                      onClose();
                      if (onNavigateToChecklist && post.downloadChecklistId) {
                        onNavigateToChecklist(post.downloadChecklistId);
                      }
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#1A1A1A] text-white hover:bg-[#333333] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                  >
                    <BookOpen className="w-4 h-4 text-[#9A8C73]" />
                    <span>Mở Checklist Kiểm tra Văn bản Tương Ứng</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Article Markdown Main Text */}
          <div className="prose max-w-none prose-headings:font-serif prose-headings:font-bold prose-h3:text-xl prose-h3:text-[#1A1A1A] prose-p:text-[#333333] prose-p:leading-relaxed prose-pre:bg-[#1A1A1A] prose-pre:text-white prose-blockquote:border-l-2 prose-blockquote:border-[#1A1A1A] prose-blockquote:bg-[#F3F1ED] prose-blockquote:p-4 space-y-4">
            {post.contentMarkdown.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('### ')) {
                return <h3 key={index} className="text-xl font-serif font-bold text-[#1A1A1A] pt-4 pb-1 border-b border-[#E5E1D8]">{paragraph.replace('### ', '')}</h3>;
              }
              if (paragraph.startsWith('#### ')) {
                return <h4 key={index} className="text-base font-bold text-[#1A1A1A] pt-2">{paragraph.replace('#### ', '')}</h4>;
              }
              if (paragraph.startsWith('> ')) {
                return (
                  <blockquote key={index} className="border-l-2 border-[#1A1A1A] bg-[#F3F1ED] p-4 text-[#1A1A1A] italic">
                    {paragraph.replace('> ', '')}
                  </blockquote>
                );
              }
              if (paragraph.startsWith('```text')) {
                return (
                  <div key={index} className="bg-[#1A1A1A] text-white p-4 font-mono text-xs overflow-x-auto leading-relaxed border border-[#333333]">
                    <pre>{paragraph.replace(/```text\n|```/g, '')}</pre>
                  </div>
                );
              }
              return <p key={index} className="text-[#333333] text-base leading-relaxed">{paragraph}</p>;
            })}
          </div>

          {/* Practical Legal Disclaimer */}
          <div className="p-4 bg-[#F3F1ED] border border-[#E5E1D8] text-xs text-[#666666] flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-[#9A8C73] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#1A1A1A]">Lưu ý chuyên môn:</strong> Thông tin bài viết phản ánh kinh nghiệm nghiệp vụ cá nhân của Luật sư tác giả. Bài viết dùng cho mục đích tham khảo chuyên môn nội bộ, không cấu thành lời khuyên pháp lý chính thức cho một hồ sơ cụ thể.
            </div>
          </div>

          {/* Like & Share Bar */}
          <div className="py-4 border-t border-b border-[#E5E1D8] flex items-center justify-between">
            <button
              onClick={() => onToggleLike(post.id)}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                isLiked
                  ? "bg-[#1A1A1A] text-white"
                  : "bg-[#F3F1ED] text-[#1A1A1A] border border-[#E5E1D8] hover:bg-[#E5E1D8]"
              }`}
            >
              <ThumbsUp className={`w-4 h-4 ${isLiked ? "fill-white text-white" : ""}`} />
              <span>{isLiked ? "Đã thích bài viết" : "Hữu ích đối với bạn?"} ({post.likes + (isLiked ? 1 : 0)})</span>
            </button>

            {copied && (
              <span className="text-xs text-[#1A1A1A] font-bold">Đã sao chép liên kết bài viết!</span>
            )}
          </div>

          {/* Discussion & Local Comments Section */}
          <section className="space-y-6 pt-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-serif font-bold text-[#1A1A1A] flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#9A8C73]" />
                <span>Thảo luận Chuyên môn ({comments.length})</span>
              </h3>
            </div>

            {/* Comment Form */}
            <form onSubmit={handleAddComment} className="p-4 bg-[#F3F1ED] border border-[#E5E1D8] space-y-3">
              <div className="grid sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Họ tên của bạn (ví dụ: LS. Nguyễn Văn A)"
                  value={newCommentAuthor}
                  onChange={(e) => setNewCommentAuthor(e.target.value)}
                  className="bg-white border border-[#E5E1D8] px-3 py-2 text-xs focus:outline-none focus:border-[#1A1A1A]"
                />
              </div>
              <textarea
                rows={3}
                placeholder="Chia sẻ nhận định hoặc kinh nghiệm thực chiến của bạn về chủ đề này..."
                value={newCommentText}
                onChange={(e) => setNewCommentText(e.target.value)}
                className="w-full bg-white border border-[#E5E1D8] p-3 text-xs focus:outline-none focus:border-[#1A1A1A]"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="flex items-center gap-2 px-5 py-2 bg-[#1A1A1A] hover:bg-[#333333] text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Gửi bình luận</span>
                </button>
              </div>
            </form>

            {/* Comments List */}
            <div className="space-y-4">
              {comments.map((comment) => (
                <div key={comment.id} className="p-4 bg-white border border-[#E5E1D8] space-y-1.5">
                  <div className="flex items-center justify-between">
                    <div className="font-bold text-[#1A1A1A] text-sm">{comment.author}</div>
                    <span className="text-xs text-[#888888]">{comment.date}</span>
                  </div>
                  <div className="text-xs text-[#9A8C73] font-bold uppercase tracking-wider">{comment.role}</div>
                  <p className="text-[#333333] text-sm pt-1 leading-relaxed">{comment.content}</p>
                </div>
              ))}
            </div>

          </section>

        </div>

      </div>
    </div>
  );
};
