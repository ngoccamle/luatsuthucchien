import React from "react";
import { BlogPost } from "../types";
import { Clock, Eye, ThumbsUp, Bookmark, ChevronRight, FileCheck } from "lucide-react";

interface BlogPostCardProps {
  post: BlogPost;
  onOpenDetail: (post: BlogPost) => void;
  isBookmarked: boolean;
  onToggleBookmark: (postId: string, e: React.MouseEvent) => void;
  isLiked: boolean;
  onToggleLike: (postId: string, e: React.MouseEvent) => void;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({
  post,
  onOpenDetail,
  isBookmarked,
  onToggleBookmark,
  isLiked,
  onToggleLike,
}) => {
  return (
    <article
      onClick={() => onOpenDetail(post)}
      className="group bg-white border border-[#E5E1D8] hover:border-[#1A1A1A] transition-all duration-200 flex flex-col justify-between overflow-hidden cursor-pointer p-6 space-y-5"
    >
      <div className="space-y-3.5">
        
        {/* Category Badge & Level Pill */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#9A8C73]">
            {post.category}
          </span>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-medium text-[#666666] bg-[#F3F1ED] border border-[#E5E1D8] px-2 py-0.5">
              {post.experienceLevel}
            </span>

            <button
              onClick={(e) => onToggleBookmark(post.id, e)}
              className={`p-1 transition-colors cursor-pointer ${
                isBookmarked
                  ? "text-[#1A1A1A]"
                  : "text-[#AAAAAA] hover:text-[#1A1A1A]"
              }`}
              title={isBookmarked ? "Bỏ lưu bài viết" : "Lưu bài viết"}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-[#1A1A1A]" : ""}`} />
            </button>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-serif font-bold text-[#1A1A1A] group-hover:underline leading-snug">
          {post.title}
        </h2>

        {/* Subtitle / Excerpt */}
        <p className="text-[#555555] text-sm line-clamp-2 leading-relaxed">
          {post.summary}
        </p>

        {/* Key Takeaways Highlight Pill if available */}
        {post.keyTakeaways && post.keyTakeaways.length > 0 && (
          <div className="p-3 bg-[#F3F1ED] border border-[#E5E1D8] text-xs text-[#333333] space-y-1">
            <div className="font-bold text-[#1A1A1A] flex items-center gap-1.5 text-[11px] uppercase tracking-wider">
              <FileCheck className="w-3.5 h-3.5 text-[#9A8C73]" />
              <span>Bài học thực chiến cốt lõi:</span>
            </div>
            <p className="line-clamp-1 italic text-[#555555]">
              "{post.keyTakeaways[0]}"
            </p>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[11px] text-[#888888] bg-[#FAF9F6] border border-[#E5E1D8] px-2 py-0.5"
            >
              #{tag}
            </span>
          ))}
        </div>

      </div>

      {/* Footer Meta */}
      <div className="pt-4 mt-2 border-t border-[#E5E1D8] flex items-center justify-between gap-3 text-xs text-[#888888]">
        
        {/* Author Avatar & Info */}
        <div className="flex items-center gap-2.5 min-w-0">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-7 h-7 rounded-full object-cover border border-[#E5E1D8] shrink-0"
          />
          <div className="truncate">
            <div className="font-semibold text-[#1A1A1A] truncate text-xs">{post.author.name}</div>
            <div className="text-[10px] text-[#888888] truncate">{post.author.lawFirm || post.author.title}</div>
          </div>
        </div>

        {/* Read Time & Stats */}
        <div className="flex items-center gap-3 shrink-0 text-[#888888]">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-[#888888]" />
            <span>{post.readTime} phút</span>
          </span>

          <button
            onClick={(e) => onToggleLike(post.id, e)}
            className={`flex items-center gap-1 px-1 py-0.5 transition-colors ${
              isLiked ? "text-[#1A1A1A] font-bold" : "text-[#888888] hover:text-[#1A1A1A]"
            }`}
          >
            <ThumbsUp className={`w-3.5 h-3.5 ${isLiked ? "fill-[#1A1A1A] text-[#1A1A1A]" : ""}`} />
            <span>{post.likes + (isLiked ? 1 : 0)}</span>
          </button>

          <span className="text-[#1A1A1A] font-semibold flex items-center group-hover:translate-x-1 transition-transform">
            <ChevronRight className="w-4 h-4" />
          </span>
        </div>

      </div>
    </article>
  );
};
