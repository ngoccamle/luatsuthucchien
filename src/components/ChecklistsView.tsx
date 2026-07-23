import React, { useState } from "react";
import { LegalChecklist, ChecklistItem } from "../types";
import { LEGAL_CHECKLISTS } from "../data/checklists";
import { CheckSquare, Copy, Check, FileCode, AlertCircle, ShieldCheck, Download, RefreshCw } from "lucide-react";

interface ChecklistsViewProps {
  initialChecklistId?: string;
}

export const ChecklistsView: React.FC<ChecklistsViewProps> = ({ initialChecklistId }) => {
  const [selectedChecklistId, setSelectedChecklistId] = useState<string>(
    initialChecklistId || LEGAL_CHECKLISTS[0].id
  );

  const [completedItems, setCompletedItems] = useState<Record<string, boolean>>({});
  const [copiedClause, setCopiedClause] = useState(false);

  const activeChecklist = LEGAL_CHECKLISTS.find(c => c.id === selectedChecklistId) || LEGAL_CHECKLISTS[0];

  const toggleItem = (itemId: string) => {
    setCompletedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const completedCount = activeChecklist.items.filter(item => completedItems[item.id]).length;
  const progressPercent = Math.round((completedCount / activeChecklist.items.length) * 100);

  const handleCopySample = () => {
    if (activeChecklist.sampleClause) {
      navigator.clipboard.writeText(activeChecklist.sampleClause);
      setCopiedClause(true);
      setTimeout(() => setCopiedClause(false), 2000);
    }
  };

  const handleResetChecklist = () => {
    setCompletedItems({});
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
      
      {/* Header Section */}
      <div className="bg-[#1A1A1A] p-6 sm:p-8 text-white border border-[#333333] space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#282828] border border-[#3E3E3E] text-[#9A8C73] text-[11px] font-bold uppercase tracking-[0.15em]">
          <CheckSquare className="w-3.5 h-3.5 text-[#9A8C73]" />
          <span>Rà soát & Kiểm tra Văn bản Tố tụng / Hợp đồng</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-serif font-bold">
          Checklists Thực Hành Cho Luật Sư
        </h1>

        <p className="text-[#AAAAAA] text-sm max-w-3xl leading-relaxed">
          Sử dụng các bảng kiểm tra tiêu chuẩn đã được chuẩn hóa để đảm bảo không bỏ sót các rủi ro pháp lý quan trọng khi chuẩn bị hồ sơ khởi kiện hoặc rà soát hợp đồng.
        </p>

        {/* Checklist Tabs */}
        <div className="flex flex-wrap gap-2 pt-2">
          {LEGAL_CHECKLISTS.map((chk) => {
            const isActive = chk.id === activeChecklist.id;
            return (
              <button
                key={chk.id}
                onClick={() => {
                  setSelectedChecklistId(chk.id);
                  setCompletedItems({});
                }}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? "bg-white text-[#1A1A1A]"
                    : "bg-[#282828] text-[#CCCCCC] hover:bg-[#383838] hover:text-white"
                }`}
              >
                {chk.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Checklist Active Panel */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Interactive Checklist Items */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white border border-[#E5E1D8] p-6 sm:p-8 space-y-6">
            
            {/* Checklist Header & Progress Bar */}
            <div className="space-y-3 pb-4 border-b border-[#E5E1D8]">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-[#9A8C73] uppercase tracking-[0.15em] bg-[#F3F1ED] px-2.5 py-1 border border-[#E5E1D8]">
                    {activeChecklist.category}
                  </span>
                  <h2 className="text-xl font-serif font-bold text-[#1A1A1A] mt-2">
                    {activeChecklist.title}
                  </h2>
                </div>

                <button
                  onClick={handleResetChecklist}
                  className="flex items-center gap-1.5 text-xs text-[#666666] hover:text-[#1A1A1A] px-3 py-1.5 border border-[#E5E1D8] bg-[#FAF9F6] transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Đặt lại</span>
                </button>
              </div>

              <p className="text-[#555555] text-sm leading-relaxed">
                {activeChecklist.description}
              </p>

              {/* Progress Bar */}
              <div className="pt-2 space-y-1">
                <div className="flex justify-between text-xs font-bold text-[#1A1A1A] uppercase tracking-wider">
                  <span>Tiến độ rà soát:</span>
                  <span className="text-[#9A8C73]">{completedCount} / {activeChecklist.items.length} hạng mục ({progressPercent}%)</span>
                </div>
                <div className="w-full h-2 bg-[#F3F1ED] overflow-hidden border border-[#E5E1D8]">
                  <div
                    className="h-full bg-[#1A1A1A] transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Checklist Items List */}
            <div className="space-y-4">
              {activeChecklist.items.map((item: ChecklistItem, index: number) => {
                const isChecked = !!completedItems[item.id];
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleItem(item.id)}
                    className={`p-4 border transition-all cursor-pointer flex items-start gap-3.5 ${
                      isChecked
                        ? "bg-[#F3F1ED] border-[#1A1A1A] text-[#1A1A1A]"
                        : "bg-white border-[#E5E1D8] hover:border-[#888888]"
                    }`}
                  >
                    <div className="pt-0.5 shrink-0">
                      <div className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                        isChecked ? "bg-[#1A1A1A] border-[#1A1A1A] text-white font-bold" : "border-[#888888] bg-white"
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </div>

                    <div className="space-y-1 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className={`text-sm font-bold ${isChecked ? "text-[#1A1A1A] line-through decoration-[#9A8C73]" : "text-[#1A1A1A]"}`}>
                          {index + 1}. {item.label}
                        </span>
                        {item.categoryTag && (
                          <span className="text-[10px] font-bold text-[#666666] bg-[#FAF9F6] border border-[#E5E1D8] px-2 py-0.5 shrink-0 uppercase tracking-wider">
                            {item.categoryTag}
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-[#555555] leading-relaxed">
                        {item.explanation}
                      </p>

                      {item.riskWarning && (
                        <div className="mt-2 text-xs text-[#1A1A1A] bg-[#FAF9F6] p-2.5 border-l-2 border-[#1A1A1A] border-y border-r border-[#E5E1D8] flex items-start gap-1.5">
                          <AlertCircle className="w-3.5 h-3.5 text-[#1A1A1A] shrink-0 mt-0.5" />
                          <span><strong>Cảnh báo rủi ro:</strong> {item.riskWarning}</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* Right Column: Sample Clause & Export Panel */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Sample Legal Clause Box */}
          {activeChecklist.sampleClause && (
            <div className="bg-[#1A1A1A] text-white p-6 border border-[#333333] space-y-4">
              <div className="flex items-center justify-between border-b border-[#333333] pb-3">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#9A8C73] font-bold flex items-center gap-1.5">
                  <FileCode className="w-4 h-4" />
                  <span>Mẫu Điều Khoản</span>
                </span>

                <button
                  onClick={handleCopySample}
                  className="flex items-center gap-1 px-2.5 py-1 bg-[#282828] hover:bg-[#383838] text-xs text-white font-medium transition-colors cursor-pointer"
                >
                  {copiedClause ? <Check className="w-3.5 h-3.5 text-[#9A8C73]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedClause ? "Đã chép" : "Sao chép"}</span>
                </button>
              </div>

              <div className="bg-[#111111] p-4 font-mono text-xs text-[#D4CEBF] leading-relaxed border border-[#2B2B2B] max-h-60 overflow-y-auto">
                {activeChecklist.sampleClause}
              </div>

              <p className="text-xs text-[#888888]">
                Bạn có thể sao chép trực tiếp điều khoản mẫu này vào dự thảo hợp đồng hoặc văn bản của bạn.
              </p>
            </div>
          )}

          {/* Quick Guidance Box */}
          <div className="bg-[#F3F1ED] p-6 border border-[#E5E1D8] space-y-3">
            <div className="font-serif font-bold text-[#1A1A1A] text-base flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#9A8C73]" />
              <span>Cách Tối Ưu Quy Trình Kiểm Tra</span>
            </div>
            <ul className="text-xs text-[#555555] space-y-2 leading-relaxed">
              <li>• Thực hiện rà soát độc lập trước khi gửi bản thảo cho khách hàng hoặc Tòa án.</li>
              <li>• Tích chọn từng mục sau khi đã đối chiếu trực tiếp với hồ sơ giấy tờ gốc.</li>
              <li>• Luôn kiểm tra thời hiệu khởi kiện và thẩm quyền Tòa án đầu tiên.</li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  );
};
