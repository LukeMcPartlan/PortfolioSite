import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LayoutShell } from "@/components/layout-shell";

import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import GameDesign from "@/pages/game-design";
import ComputerScience from "@/pages/computer-science";
import Education from "@/pages/education";
import Esports from "@/pages/esports";
import ProjectDetail from "@/pages/project-detail";

function Router() {
  return (
    <LayoutShell>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/game-design" component={GameDesign} />
        <Route path="/computer-science" component={ComputerScience} />
        <Route path="/education" component={Education} />
        <Route path="/esports" component={Esports} />
        <Route path="/project/:id" component={ProjectDetail} />
        <Route component={NotFound} />
      </Switch>
    </LayoutShell>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
