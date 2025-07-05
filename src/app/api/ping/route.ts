import api from "@/Lib/Utils/AxiosUtils";

export async function GET() {
    await api.get("/public/health");
    return new Response("Pinged!", { status: 200 });
}
