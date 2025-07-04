import { AddTaskModel } from "@/components/module/tasks/AddTaskModel";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTasksQuery } from "@/redux/api/baseApi";
import type { ITask } from "@/types";

export const Tasks = () => {
  const { data, isLoading } = useGetTasksQuery(undefined, {
    pollingInterval: 30000,
    refetchOnFocus: true,
    refetchOnReconnect: true,
    refetchOnMountOrArgChange: true,
  });
  console.log(data);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex items-end justify-between gap-5">
        <h1 className="mr-auto ">Tasks</h1>
        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger
              // onClick={() => dispatch(updateFilter("low"))}
              value="low"
            >
              Low
            </TabsTrigger>
            <TabsTrigger value="medium">Medium</TabsTrigger>
            <TabsTrigger value="high">High</TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModel />
      </div>
      <div className="space-y-5 mt-5">
        {!isLoading &&
          data?.map((task: ITask) => <TaskCard task={task} key={task.id} />)}
      </div>
    </div>
  );
};
