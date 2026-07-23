import React from "react";
import { BlogPost } from "../types";
import { BlogPostCard } from "./BlogPostCard";
import { Bookmark, BookOpen } from "lucide-react";

interface SavedArticlesViewProps {
  savedPosts: BlogPost[];
  onOpenDetail: (post: BlogPost) => void;
  onToggleBookmark: (postId: string, e: React.MouseEvent) => void;
  likedPostIds: string[];
  onToggleLike: (postId: string, e: React.MouseEvent) => void;
  onExplore: () => void;
}

export const SavedArticlesView: React.FC<SavedArticlesViewProps> = ({
  savedPosts,
  onOpenDetail,
  onToggleBookmark,
  likedPostIds,
  onToggleLike,
  onExplore,
}) => {
  if (savedPosts.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4 animate-fadeIn">
        <div className="w-16 h-16 mx-auto bg-[#F3F1ED] border border-[#E5E1D8] flex items-center justify-center text-[#888888]">
          <Bookmark className="w-8 h-8 text-[#9A8C73]" />
        </div>
        <h2 className="text-2xl font-serif font-bold text-[#1A1A1A]">
          Chưa Có Bài Viết Nào Được Lưu
        </h2>
        <p className="text-[#666666] text-sm max-w-md mx-auto">
          Khi đọc các bài viết chia sẻ kỹ năng thực hành, hãy bấm biểu tượng Bookmark để lưu trữ bài viết vào đây và xem lại khi cần!
        </p>
        <button
          onClick={onExplore}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A1A1A] hover:bg-[#333333] text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
        >
          <BookOpen className="w-4 h-4 text-[#9A8C73]" />
          <span>Khám phá các bài viết kỹ năng</span>
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 animate-fadeIn">
      <div className="flex items-center justify-between border-b border-[#E5E1D8] pb-4">
        <div>
          <h1 className="text-2xl font-serif font-bold text-[#1A1A1A] flex items-center gap-2">
            <Bookmark className="w-6 h-6 text-[#9A8C73] fill-[#9A8C73]" />
            <span>Danh Sách Bài Viết Đã Lưu ({savedPosts.length})</span>
          </h1>
          <p className="text-[#666666] text-xs mt-1">
            Các bài viết, kỹ năng và điều khoản mẫu bạn đã đánh dấu để nghiên cứu chuyên sâu.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {savedPosts.map((post) => (
          <BlogPostCard
            key={post.id}
            post={post}
            onOpenDetail={onOpenDetail}
            isBookmarked={true}
            onToggleBookmark={onToggleBookmark}
            isLiked={likedPostIds.includes(post.id)}
            onToggleLike={onToggleLike}
          />
        ))}
      </div>
    </div>
  );
};
