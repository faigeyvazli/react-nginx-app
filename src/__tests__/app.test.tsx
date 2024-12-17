import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { App } from '@app/app';

describe('<App />', () => {
  it('renders correctly', () => {
    render(<App />);
    expect(screen.getByText('This is app')).toBeInTheDocument();
  });

  it('should button show "Count: 0"', () => {
    render(<App />);
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });

  it('should click to button counts correctly', async () => {
    render(<App />);

    const button = screen.getByText('Count: 0');

    expect(button).toBeInTheDocument();

    await userEvent.click(button);
    await userEvent.click(button);
    await userEvent.click(button);

    expect(button.innerHTML).toEqual('Count: 3');
  });
});
