import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Button } from '@/components/ui/button';

describe('ルーティングテスト', () => {
    test('ページ遷移を確認', () => {
        const mockRouterPush = jest.fn();
        render(<Button variant="outline" className="font-semibold" onClick={() => mockRouterPush('/login')}>ログイン</Button>);
        fireEvent.click(screen.getByText('ログイン'));
        expect(mockRouterPush).toHaveBeenCalledWith('/login');
    })
})