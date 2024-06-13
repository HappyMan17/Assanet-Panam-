/**
 * @jest-environment jsdom
 */

import { act, renderHook } from "@testing-library/react-native";
import { useTasks } from "@/hooks/useTasks";
import { store } from "@/state/store";
import { Provider } from "react-redux";

const wrapper = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

describe('Fetched data successfully', () => {
  it('should fetch data from server', async () => {
    const { result  } = renderHook(() => useTasks(), { wrapper });
    
    await act(async () => await result.current.startFetchingTasks())
    
    setTimeout(() => {
      expect(result.current.tasks.length).toBeGreaterThanOrEqual(1);
      console.log(result.current.tasks)
    }, 1000)
  });
});

// @testing-library/react-native