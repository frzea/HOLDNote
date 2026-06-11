import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsLine() {
  return (
    <Tabs defaultValue="overview">
      <TabsList variant="line">
        <TabsTrigger value="overview">Top coins</TabsTrigger>
        <TabsTrigger value="analytics">Favorites</TabsTrigger>
        <TabsTrigger value="reports">My coins</TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
