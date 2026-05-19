import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Fully-Conditional Hand-Object Interaction World Model (HMI Lab, ZGCA, built on the Zhongguancun Academy foundational program, in collaboration with HMI Lab, PKU)",
  description: "Project showcase: research directions and subtopics"
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return children;
}
