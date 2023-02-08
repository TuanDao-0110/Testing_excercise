import React from "react";
import { render, screen, fireEvent ,waitFor} from "@testing-library/react";
import { ApiComponent } from "./ApiComponent";
import { rest } from "msw";
import { setupServer } from "msw/node";
const server = setupServer(
  rest.get("/api", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ name: "jack" }));
  })
);
beforeAll(() => {
  // Establish requests interception layer before all tests.
  server.listen();
});
afterEach(()=> server.restoreHandlers())
afterAll(() => {
  // Clean up after all tests are done, preventing this
  // interception layer from affecting irrelevant tests.
  server.close();
});
describe("testing", () => {
  test("testing hanlde counter by use state", async () => {
    render(<ApiComponent />);
    const out = await waitFor(()=> screen.findByRole('contentinfo'));
    expect(out).toHaveTextContent('Name is jack')
  });
});
