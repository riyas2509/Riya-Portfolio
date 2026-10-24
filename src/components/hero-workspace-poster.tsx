"use client";
import Image from "next/image";
import { WorkspacePoster } from "./little-art";
import { workspaceHasCharacter } from "@/data/workspace-experiment";

/** Same scene rendered once at rest. Mobile and WebGL failures need no 3D runtime. */
export function HeroWorkspacePoster() {
  if (!workspaceHasCharacter) return <WorkspacePoster />;
  return (
    <Image
      src="/workspace/riya-workspace.webp"
      alt=""
      fill
      sizes="(max-width: 650px) 100vw, (max-width: 900px) 50vw, 600px"
      style={{ objectFit: "contain" }}
    />
  );
}
