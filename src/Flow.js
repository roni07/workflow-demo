import React, {useCallback} from 'react';
import {addEdge, Background, Controls, MiniMap, ReactFlow, useEdgesState, useNodesState,} from 'reactflow';
import 'reactflow/dist/style.css';

import CustomNode from './CustomNode';

// const CustomNode = ({data}) => {
//     return (
//         <div style={{
//             padding: '10px',
//             background: '#fff',
//             border: '1px solid #222',
//             width: "100%",
//         }}>
//             {data.label}
//             {data.children && data.children.length > 0 && (
//                 <div style={{marginTop: '10px', padding: '5px', background: '#f9f9f9'}}>
//                     {data.children.map(child => (
//                         <div key={child.id} style={{margin: '5px', padding: '5px', border: '1px solid #ccc'}}>
//                             {child.label}
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

const Flow = () => {
    const initialNodes = [
        {
            id: '1',
            data: {
                label: 'Parent Node',
                children: [
                    {id: '1-1', label: 'Child Node 1'},
                    {id: '1-2', label: 'Child Node 2'}
                ]
            },
            position: {x: 100, y: 100},
            type: 'customNode',
        },
        {
            id: '2',
            data: {label: 'Another Parent Node', children: []},
            position: {x: 400, y: 100},
            type: 'customNode',
        },
    ];

    const initialEdges = [];

    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback((params) => {
        setEdges((eds) => addEdge(params, eds));
    }, []);

    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={{
                customNode: CustomNode,
            }}
            fitView
        >
            <MiniMap/>
            <Controls/>
            <Background/>
        </ReactFlow>
    );
};

export default Flow;