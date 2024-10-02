export default function guardrail(mathFunction) {
  const queue = ['Guardrail was processed'];
  try {
    const res = mathFunction();
    queue.unshift(res);
  } catch (error) {
    queue.unshift(String(error));
  }
  return queue;
}
