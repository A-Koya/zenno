import React, { ReactElement } from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import Sample from '../Sample';

describe("Sample", () => {
    it("コンポーネントのレンダリングのテスト", async () => {
        render(<Sample />);
    });
});
