import React from 'react';
import { Link } from 'react-router-dom';
import { mockMentors } from '../../../data';

export const MentorsSection: React.FC = () => {
  return (
    <section id="mentors" className="bg-[#FAFAFA] py-20 sm:py-24 border-b border-[#E5E6E8]">
      <div className="bytespace-container">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="inline-block bg-[#E7F6FF] text-[#003BE2] border border-[#B0DDFF] text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            Elite Mentorship
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#242528] tracking-tight mb-3">
            Learn from Industry Leaders
          </h2>
          <p className="text-[#585A62] text-sm sm:text-base leading-relaxed">
            Gain insights directly from seasoned practitioners who build the products you use every day.
          </p>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockMentors.map((mentor) => (
            <Link
              key={mentor.id}
              to={`/creator/${mentor.id}`}
              className="bg-white border border-[#E5E6E8] rounded-2xl p-6 text-center hover:-translate-y-1.5 hover:shadow-xl transition-all duration-200 flex flex-col items-center group cursor-pointer"
            >
              {/* Avatar with Ring */}
              <div className="relative mb-4">
                <img
                  src={mentor.avatar}
                  alt={mentor.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-[#CBFC01] shadow-md"
                />
                <span className="absolute bottom-0 right-0 bg-[#003BE2] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  ★ {mentor.rating}
                </span>
              </div>

              {/* Name & Role */}
              <h3 className="font-display font-bold text-base text-[#242528] mb-1 group-hover:text-[#003BE2] transition-colors">
                {mentor.name}
              </h3>
              <p className="text-xs text-[#003BE2] font-semibold mb-2">
                {mentor.role}
              </p>
              <p className="text-xs text-[#585A62] mb-4 line-clamp-2">
                {mentor.specialty}
              </p>

              {/* Stats pill */}
              <div className="mt-auto w-full pt-3 border-t border-[#F5F5F6] flex items-center justify-between text-xs text-[#82868E]">
                <span>Students</span>
                <span className="font-bold text-[#242528]">{mentor.studentsCount}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
