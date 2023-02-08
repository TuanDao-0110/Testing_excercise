import { rest } from "msw";
import { setupServer } from "msw/node";
import { renderHook, waitFor } from "@testing-library/react";
import { useAPI } from "./useAPI";
const server = setupServer(
  rest.get("/api", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ name: "jack" }));
  })
);
beforeAll(() => {
  // Establish requests interception layer before all tests.
  server.listen();
});
afterEach(() => server.restoreHandlers());
afterAll(() => {
  // Clean up after all tests are done, preventing this
  // interception layer from affecting irrelevant tests.
  server.close();
});
test("should increment", async () => {
  const { result } = renderHook(() => useAPI());

  await waitFor(() => expect(result.current).toEqual({ name: "jack" }));
});
