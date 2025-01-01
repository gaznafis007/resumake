import { NextResponse } from "next/server";

export const GET = () => {
  const features = [
    {
      title: "Drag-and-Drop Sections",
      description:
        "Easily organize your resume with a smooth drag-and-drop interface.",
      bgColor: 'bg-sky-300'
    },
    {
      title: "Customizable Templates",
      description:
        "Choose from modern, professional designs to match your style.",
        bgColor: 'bg-green-300'
    },
    {
      title: "Real-Time Preview",
      description: "See changes instantly as you edit your resume.",
      bgColor: 'bg-pink-300'
    },
    {
      title: "PDF Export",
      description: "Download high-quality resumes with a single click.",
      bgColor: 'bg-rose-300'
    },
    {
      title: "Save Your Progress",
      description: "Resume drafts are saved automatically for future edits.",
      bgColor: 'bg-orange-300'
    },
  ];
    try{
      return NextResponse.json(features)
    }catch(error){
      return NextResponse.error({
        status: 500,
        message: 'internal error'
      })
    }
};


