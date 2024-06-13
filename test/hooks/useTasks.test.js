describe('Fetched data successfully', () => {
  it('should fetch data from server', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useTasks());
    await waitForNextUpdate();
    await result.current.fetchTasks();
    expect(result.current.tasks).([
      { id: 1, title: 'Task 1' },
      { id: 2, title: 'Task 2' },
    ]);
  });
});