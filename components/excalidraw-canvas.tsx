"use client"

import { Excalidraw, MainMenu, WelcomeScreen } from '@excalidraw/excalidraw'

const ExcalidrawCanvas = () => {
    return (
        <div style={{ height: "100vh" }}>
            <Excalidraw theme='dark' UIOptions={{ canvasActions: { toggleTheme: true } }} >
                <MainMenu>
                    <MainMenu.DefaultItems.LoadScene />
                    <MainMenu.DefaultItems.SaveAsImage />
                    <MainMenu.DefaultItems.Export />
                    <MainMenu.DefaultItems.ClearCanvas />
                    <MainMenu.DefaultItems.ToggleTheme />
                    <MainMenu.DefaultItems.Help />
                    <MainMenu.DefaultItems.ChangeCanvasBackground />
                </MainMenu>
                <WelcomeScreen.Hints.MenuHint />
                <WelcomeScreen.Hints.ToolbarHint />
                <WelcomeScreen.Hints.HelpHint />
            </Excalidraw>
        </div>
    )
}

export default ExcalidrawCanvas