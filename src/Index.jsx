
import {createRoot} from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


import Home from "./Home";
import Events from "./Events";
import Navbar from "./components/Navbar";
import AssignTasks from "./AssignTasks";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity,
        },
    },
});
  



const App = () => {
    return(
        <div className="App">
            <BrowserRouter>
                <QueryClientProvider client={queryClient} >
                    <Navbar />
                    <Routes>
                        <Route path="/assigntasks" element={<AssignTasks />} />
                        <Route path="/tasks" element={<Events />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </QueryClientProvider>
            </BrowserRouter>
        </div>
      
    )
}



const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />)