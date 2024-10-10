import React, {useCallback} from 'react';
import CustomNodeChild from "./CustomNodeChild";
import update from "immutability-helper";

const CustomNode = ({data}) => {

    const moveCard = useCallback((dragIndex, hoverIndex) => {
        data?.children(prevCards =>
            update(prevCards, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, prevCards[dragIndex]],
                ],
            })
        )
    }, [])

    return (
        <div style={{
            padding: '10px',
            background: '#fff',
            border: '1px solid #222',
            width: "100%",
        }}>
            {data.label}
            {
                data.children && data.children.length > 0 && (
                    <div style={{marginTop: '10px', padding: '5px', background: '#f9f9f9'}}>
                        {data.children.map((child, index) => (
                            <CustomNodeChild
                                key={child.id}
                                id={child.id}
                                index={index}
                                moveCard={moveCard}
                                text={child.label}
                            />
                        ))}
                    </div>
                )
            }
            {/*{data.children && data.children.length > 0 && (
                <div style={{marginTop: '10px', padding: '5px', background: '#f9f9f9'}}>
                    {data.children.map(child => (
                        <div key={child.id} style={{margin: '5px', padding: '5px', border: '1px solid #ccc'}}>
                            {child.label}
                        </div>
                    ))}
                </div>
            )}*/}
        </div>
    );
};

export default CustomNode;