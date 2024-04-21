import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Modal from "../../../src/components/Modal/Modal";

describe("Modal component", () => {
  it("renders correctly when open is true", () => {
    const { getByText } = render(
      <Modal
        description="Modal description"
        title="Modal title"
        action={() => console.log("Action clicked")}
        open={true}
        close={() => console.log("Modal closed")}
      />
    );

    expect(getByText("Modal title")).toBeTruthy();
    expect(getByText("Modal description")).toBeTruthy();
    expect(getByText("Cerrar")).toBeTruthy();
    expect(getByText("Aceptar")).toBeTruthy();
  });

  it("does not render when open is false", () => {
    const { queryByText } = render(
      <Modal
        description="Modal description"
        title="Modal title"
        action={() => console.log("Action clicked")}
        open={false}
        close={() => console.log("Modal closed")}
      />
    );

    expect(queryByText("Modal title")).toBeNull();
    expect(queryByText("Modal description")).toBeNull();
    expect(queryByText("Cerrar")).toBeNull();
    expect(queryByText("Aceptar")).toBeNull();
  });

  it("calls the action and close functions when 'Aceptar' button is clicked", () => {
    const actionMock = jest.fn();
    const closeMock = jest.fn();

    const { getByText } = render(
      <Modal
        description="Modal description"
        title="Modal title"
        action={actionMock}
        open={true}
        close={closeMock}
      />
    );

    const acceptButton = getByText("Aceptar");
    fireEvent.click(acceptButton);

    expect(actionMock).toHaveBeenCalledTimes(1);
    expect(closeMock).toHaveBeenCalledTimes(1);
  });

  it("calls the close function when 'Cerrar' button is clicked", () => {
    const closeMock = jest.fn();

    const { getByText } = render(
      <Modal
        description="Modal description"
        title="Modal title"
        action={() => console.log("Action clicked")}
        open={true}
        close={closeMock}
      />
    );

    const closeButton = getByText("Cerrar");
    fireEvent.click(closeButton);

    expect(closeMock).toHaveBeenCalledTimes(1);
  });
});
