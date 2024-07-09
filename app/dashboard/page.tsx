import ExcalidrawCanvas from '@/components/excalidraw-canvas'
import { validateRequest } from '@/lib/auth'
import { redirect } from 'next/navigation';

const DashboardPage = async () => {
    const { user } = await validateRequest();
    if (!user) {
        redirect("/auth/login");
    }
    // console.log(user);

    return (
        <ExcalidrawCanvas />
    )
}

export default DashboardPage