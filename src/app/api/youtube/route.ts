import { downloadMp3 } from "@/services/youtube-service";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const { id } = await request.json();
  if (!id) return NextResponse.json({ error: "No id provided" }, { status: 400 });
  const { response, error } = await downloadMp3(id);
  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
  return NextResponse.json({ response }, { status: 200 });
};
