import { render, screen, userEvent, waitFor } from "../../utils/test-utils";
import { MyForm } from "./MyForm";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

describe("Formik form sample test", () => {
  it("renders the form without crashing", () => {
    render(<MyForm onSubmit={() => null} />);
    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument()

  });
  it("rendering and submitting a basic Formik form", async () => {
    const handleSubmit = jest.fn();
    render(<MyForm onSubmit={handleSubmit} />);
    const user = userEvent.setup();

    await user.type(screen.getByLabelText(/first name/i), "John");
    await user.type(screen.getByLabelText(/last name/i), "Dee");
    await user.type(screen.getByLabelText(/email/i), "john.dee@someemail.com");

    await user.click(screen.getByRole("button", { name: /submit/i }));
    await sleep(500);
    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith({
        email: "john.dee@someemail.com",
        firstName: "John",
        lastName: "Dee",
      })
    );
  });
});
