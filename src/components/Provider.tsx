'use client'
import { store } from "@/store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider as ReduxProvider } from 'react-redux'

const queryClient = new QueryClient()
export default function Provider({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <ReduxProvider store={store}>
            <QueryClientProvider client={queryClient}>
                {children}
                <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-right" />
                {/* {process.env.NODE_ENV === 'development' && (
                <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-right" />
              )} */}
            </QueryClientProvider>
        </ReduxProvider>
    );
}