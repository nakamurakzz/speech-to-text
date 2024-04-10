import Home from "./_components/body";
import { GetText } from "./lib/api";

export default async function Top() {
  const text = await GetText();
  
  return (
    <Home Text={text ?? ""}/>
  );
}
