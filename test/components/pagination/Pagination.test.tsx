import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Pagination from "../../../src/components/Pagination";

describe("Pagination component", () => {
  it("should call onChangePageSize when select value changes", () => {
    const onChangePageSize = jest.fn();
    const { getByDisplayValue } = render(
      <Pagination
        page={1}
        pageSize={10}
        onChangePageSize={onChangePageSize}
        onNext={() => {}}
        onBack={() => {}}
        disabledBack={false}
        disabledNext={false}
      />
    );

    const selectElement = getByDisplayValue("10 registros por pág");
    fireEvent.change(selectElement, { target: { value: "20" } });

    expect(onChangePageSize).toHaveBeenCalledWith(20);
  });

  it("should call onNext when next button is clicked", () => {
    const onNext = jest.fn();
    const { getByTestId } = render(
      <Pagination
        page={1}
        pageSize={10}
        onChangePageSize={() => {}}
        onNext={onNext}
        onBack={() => {}}
        disabledBack={false}
        disabledNext={false}
      />
    );

    const nextButton = getByTestId("Next page");
    fireEvent.click(nextButton);

    expect(onNext).toHaveBeenCalled();
  });

  it("should call onBack when back button is clicked", () => {
    const onBack = jest.fn();
    const { getByTestId } = render(
      <Pagination
        page={1}
        pageSize={10}
        onChangePageSize={() => {}}
        onNext={() => {}}
        onBack={onBack}
        disabledBack={false}
        disabledNext={false}
      />
    );

    const backButton = getByTestId("Previous page");
    fireEvent.click(backButton);

    expect(onBack).toHaveBeenCalled();
  });
});
