import { render, screen, userEvent } from "./utils/test-utils";
import App from "./App";
import { rest } from "msw";
import { setupServer } from "msw/node";

// We use a mock object to be our response
const mockedResponse = [
  {
    id: 1,
    name: "Peter Parker",
    username: "not-spiderman",
    email: "peteyparker@dailybugle.com",
    address: {
      street: "20 Ingram Street",
      suite: "Apt. 556",
      city: "New York",
      zipcode: "11368",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: ".org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
];
// We use msw to intercept the network request during the test,
// and return the response 'mockedResponse' object after 150ms
// when receiving a get request to the `https://jsonplaceholder.typicode.com/users` endpoint
export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
    return res(ctx.json(mockedResponse), ctx.delay(150));
  }),
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

describe("Simple working test", () => {
  it("the title is visible", () => {
    render(<App />);
    expect(screen.getByText(/Hello testing playground!/i)).toBeInTheDocument();
  });
  it("should increment count on click", async () => {
    const component = render(<App />);
    await userEvent.click(
      component.container.querySelector("#increaseCounter") as HTMLInputElement
    );
    expect(await screen.findByText(/counter value is: 1/i)).toBeInTheDocument();
  });
  it("should change nav button from login to logout", async () => {
    const component = render(<App />);
    await userEvent.click(
      component.container.querySelector("#login") as HTMLInputElement
    );
    expect(await screen.findByText(/Logout/i)).toBeInTheDocument();
  });
  it("should change nav button from logout to login", async () => {
    const component = render(<App />);
    await userEvent.click(
      component.container.querySelector("#logout") as HTMLInputElement
    );
    expect(await screen.findByText(/Login/i)).toBeInTheDocument();
  });
  it("should test that we fetch data from our mocked server", async () => {
    const component = render(<App />);
    await userEvent.click(
      component.container.querySelector("#fetch-users") as HTMLInputElement
    );
    expect(
      await screen.findByText(/Number of records fetched: 1/i)
    ).toBeInTheDocument();
  });
  it("should test that we render a table with data from our mocked server", async () => {
    const component = render(<App />);
    await userEvent.click(
      component.container.querySelector("#fetch-users") as HTMLInputElement
    );
    expect(await screen.findByText(/peter parker/i)).toBeInTheDocument();
  });
});
