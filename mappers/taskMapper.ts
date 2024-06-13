export const taskMapper = (task: any) => {
  try {
    const { id, avatar, name, createdAt } = task;
  
    if (!id || !avatar || !name || !createdAt) {
      return null;
    }
  
    return {
      id,
      avatar,
      name,
      // createdAt,
      createdAt: createdAt ? new Date(createdAt).toDateString() : new Date().toDateString(),
    };
  } catch (error) {
    return null;
  }
};