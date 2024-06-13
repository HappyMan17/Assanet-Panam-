/**
 * @jest-environment jsdom
 */

import { act, fireEvent, render, renderHook } from "@testing-library/react-native";
import { useTasks } from "@/hooks/useTasks";
import { store } from "@/state/store";
import { Provider } from "react-redux";
import { CreateTaskModal } from "@/app/tasks/modals/CreateTaskModal";
import TasksScreen from "@/app/tasks";
import TaskListScreen from "@/app/list";

const wrapper = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

const { result  } = renderHook(() => useTasks(), { wrapper });
const TASKNAME = 'Vender fruta';
const DBNAME = 'Raul Paucek';


// describe('Fetched data successfully', () => {
//   it('should fetch data from server', async () => {
//     const { getByText } = render(<TaskListScreen />, { wrapper })

//     await act(async () => {
//       await result.current.startFetchingTasks();
//     })

//     expect(getByText(DBNAME)).toBeInTheDocument();
//   });
// });

describe('Create task', () => {
  it('Create task using its name', async () => {
    const onSaveModal = (name) => {
      result.current.startCreatingTask(name);
    }

    // const { result  } = renderHook(() => useTasks(), { wrapper });
    const { getAllByText } = render(<TasksScreen />, { wrapper })
    const { getByPlaceholderText, getByText } = render(
      <CreateTaskModal onSave={onSaveModal} />
    )

    const input = getByPlaceholderText('Task Name');
    fireEvent.changeText(input, TASKNAME);
    
    // BUTTON
    fireEvent.press(getByText('Add Task'));

    const taskElements = getAllByText(TASKNAME);
    expect(taskElements).toHaveLength(1);
  });
});

// @testing-library/react-native