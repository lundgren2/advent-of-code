export async function readInput(file: string): Promise<string> {
  return Bun.file(file).text();
}
