import React, { useState } from "react";
import { PracticalScenario, ScenarioOption } from "../types";
import { PRACTICAL_SCENARIOS } from "../data/scenarios";
import { BrainCircuit, CheckCircle2, XCircle, Award, ArrowRight, HelpCircle, AlertOctagon } from "lucide-react";

export const PracticeScenariosView: React.FC = () => {
  const [activeScenarioId, setActiveScenarioId] = useState<string>(PRACTICAL_SCENARIOS[0].id);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});

  const currentScenario = PRACTICAL_SCENARIOS.find(s => s.id === activeScenarioId) || PRACTICAL_SCENARIOS[0];
  const selectedOptionId = selectedOptions[currentScenario.id];

  const handleSelectOption = (optionId: string) => {
    setSelectedOptions(prev => ({
      ...prev,
      [currentScenario.id]: optionId
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
      
      {/* Header Panel */}
      <div className="bg-[#1A1A1A] p-6 sm:p-8 text-white border border-[#333333] space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#282828] border border-[#3E3E3E] text-[#9A8C73] text-[11px] font-bold uppercase tracking-[0.15em]">
          <BrainCircuit className="w-3.5 h-3.5 text-[#9A8C73]" />
          <span>Mô Phỏng Tình Huống Thực Tế & Đạo Đức Nghề Luật</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-serif font-bold">
          Thực Hành Xử Lý Tình Huống Nghề Luật Sư
        </h1>

        <p className="text-[#AAAAAA] text-sm max-w-3xl leading-relaxed">
          Đặt mình vào vị trí Luật sư giải quyết các xung đột giữa Yêu cầu khách hàng - Quy định Pháp luật - Quy tắc Đạo đức Nghề nghiệp. Nhận phản hồi chuyên môn trực tiếp từ Luật sư Trưởng.
        </p>

        {/* Scenario Selector Tabs */}
        <div className="flex flex-wrap gap-2 pt-2">
          {PRACTICAL_SCENARIOS.map((scen, idx) => {
            const isActive = scen.id === currentScenario.id;
            const isCompleted = !!selectedOptions[scen.id];
            return (
              <button
                key={scen.id}
                onClick={() => setActiveScenarioId(scen.id)}
                className={`flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? "bg-white text-[#1A1A1A]"
                    : "bg-[#282828] text-[#CCCCCC] hover:bg-[#383838] hover:text-white"
                }`}
              >
                <span>Tình huống {idx + 1}</span>
                {isCompleted && <CheckCircle2 className="w-3.5 h-3.5 text-[#9A8C73]" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Scenario Layout */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        
        {/* Scenario Detail & Options Panel */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white border border-[#E5E1D8] p-6 sm:p-8 space-y-6">
            
            {/* Title & Metadata */}
            <div className="space-y-3 pb-4 border-b border-[#E5E1D8]">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 bg-[#F3F1ED] text-[#1A1A1A] border border-[#E5E1D8] text-xs font-bold uppercase tracking-wider">
                  {currentScenario.category}
                </span>
                <span className="px-2.5 py-1 bg-[#FAF9F6] text-[#9A8C73] border border-[#E5E1D8] text-xs font-semibold">
                  {currentScenario.difficulty}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1A1A1A]">
                {currentScenario.title}
              </h2>
            </div>

            {/* Situation Context Description */}
            <div className="space-y-4">
              <div className="p-4 bg-[#F3F1ED] border border-[#E5E1D8] space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[#9A8C73] flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4 text-[#9A8C73]" />
                  <span>Diễn biến Tình huống:</span>
                </h3>
                <p className="text-[#1A1A1A] text-sm leading-relaxed font-medium">
                  {currentScenario.context}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-white border border-[#E5E1D8] text-[#333333]">
                  <strong className="block text-[#1A1A1A] font-bold mb-1 uppercase tracking-wider text-[11px]">Mục tiêu Khách hàng:</strong>
                  <span>{currentScenario.clientGoal}</span>
                </div>

                <div className="p-3 bg-white border border-[#E5E1D8] text-[#333333]">
                  <strong className="block text-[#1A1A1A] font-bold mb-1 uppercase tracking-wider text-[11px]">Xung đột Pháp lý / Đạo đức:</strong>
                  <span>{currentScenario.legalConflict}</span>
                </div>
              </div>
            </div>

            {/* Options Selection */}
            <div className="space-y-4 pt-2">
              <h3 className="text-xs font-bold text-[#1A1A1A] uppercase tracking-[0.15em]">
                Phương án xử lý của bạn:
              </h3>

              <div className="space-y-3">
                {currentScenario.options.map((opt: ScenarioOption, index: number) => {
                  const isSelected = selectedOptionId === opt.id;
                  return (
                    <div
                      key={opt.id}
                      onClick={() => handleSelectOption(opt.id)}
                      className={`p-4 border transition-all cursor-pointer space-y-2 ${
                        isSelected
                          ? opt.isRecommended
                            ? "bg-[#F3F1ED] border-[#1A1A1A]"
                            : "bg-[#F3F1ED] border-[#1A1A1A]"
                          : "bg-white border-[#E5E1D8] hover:border-[#888888]"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span className={`w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                          isSelected
                            ? "bg-[#1A1A1A] text-white"
                            : "bg-[#F3F1ED] text-[#1A1A1A] border border-[#E5E1D8]"
                        }`}>
                          {String.fromCharCode(65 + index)}
                        </span>

                        <span className="text-sm text-[#1A1A1A] font-semibold leading-relaxed">
                          {opt.choiceText}
                        </span>
                      </div>

                      {/* Feedback Reveal when Selected */}
                      {isSelected && (
                        <div className="mt-3 pt-3 border-t border-[#E5E1D8] text-xs leading-relaxed space-y-1.5 text-[#333333]">
                          <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[11px]">
                            {opt.isRecommended ? (
                              <>
                                <CheckCircle2 className="w-4 h-4 text-[#9A8C73]" />
                                <span className="text-[#1A1A1A]">ĐÁNH GIÁ CHUẨN XÁC</span>
                              </>
                            ) : (
                              <>
                                <XCircle className="w-4 h-4 text-[#1A1A1A]" />
                                <span className="text-[#1A1A1A]">CẦN CÂN NHẮC LẠI</span>
                              </>
                            )}
                          </div>
                          <p>{opt.feedback}</p>
                          <p className="italic text-[#666666]">{opt.scoreExplanation}</p>
                        </div>
                      )}

                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Partner Advice Explanation */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-[#1A1A1A] text-white p-6 border border-[#333333] space-y-4">
            <div className="flex items-center gap-2 text-[#9A8C73] border-b border-[#333333] pb-3">
              <Award className="w-5 h-5 text-[#9A8C73]" />
              <span className="text-xs font-mono uppercase tracking-[0.15em] font-bold">
                Lời Nhắn Từ Luật Sư Trưởng
              </span>
            </div>

            <p className="text-sm text-[#CCCCCC] leading-relaxed italic">
              "{currentScenario.partnerAdvice}"
            </p>

            <div className="pt-2 text-xs text-[#888888] border-t border-[#333333]">
              Thực hành giải quyết tình huống giúp luật sư rèn luyện tư duy phản biện và giữ vững đạo đức nghề nghiệp trong mọi hoàn cảnh.
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
