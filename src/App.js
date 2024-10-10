import Flow from "./Flow";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import CustomDrag from "./CustomDrag";

function App() {

    return (
        <div style={{height: '100vh'}}>
            <DndProvider backend={HTML5Backend}>
                <Flow/>
            </DndProvider>
            {/*<DndProvider backend={HTML5Backend}>*/}
            {/*    <CustomDrag/>*/}
            {/*</DndProvider>*/}
        </div>
    );
}

export default App;