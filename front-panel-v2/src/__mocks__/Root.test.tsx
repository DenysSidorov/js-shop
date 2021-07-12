import React from "react";
import { render, screen } from "@testing-library/react";

const Root = () => <div>Root</div>;
test("Root contains root id", () => {
    render(<Root/>);
    const text = screen.getByText('Test');
    expect(text).not.toBeInTheDocument();
});
