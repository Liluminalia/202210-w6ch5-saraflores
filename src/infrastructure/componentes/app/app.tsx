import { Layout } from '../layout/layout';
import { AppRoutes } from '../Routes/app.routes';
import './app.css';

export function App() {
    return (
        <div className="app">
            <Layout>
                <AppRoutes></AppRoutes>
            </Layout>
        </div>
    );
}
