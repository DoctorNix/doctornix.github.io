import React from 'react';
import { content } from '../content';
import { DailyCareContent, ProductItem } from '../content/types';

interface DailyCareProps {
    isLargeFont: boolean;
    isChinese: boolean;
}

const DailyCare: React.FC<DailyCareProps> = ({ isLargeFont, isChinese }) => {
    const language = isChinese ? 'zh' : 'en';
    const dailyCareContent: DailyCareContent = content[language].dailyCare;

    return (
        <div
            style={{
                padding: '20px',
                minHeight: '100vh',
                fontSize: isLargeFont ? '1.5rem' : '1rem',
            }}
        >
            <h1
                style={{
                    fontSize: isLargeFont ? '3.5rem' : '3rem',
                    marginBottom: '20px',
                    textAlign: 'center',
                }}
            >
                {dailyCareContent.title}
            </h1>
            <p style={{ textAlign: 'center' }}>{dailyCareContent.description}</p>

            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    marginTop: '40px',
                }}
            >
                {dailyCareContent.products.map((product: ProductItem) => (
                    <div
                        key={product.id}
                        style={{
                            width: '300px',
                            margin: '20px',
                            padding: '20px',
                            backgroundColor: 'rgba(255, 255, 255, 0.8)',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            borderRadius: '8px',
                            textAlign: 'center',
                        }}
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                        />
                        <h2 style={{ fontSize: isLargeFont ? '2rem' : '1.5rem', margin: '20px 0 10px' }}>
                            {product.name}
                        </h2>
                        <p>{product.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DailyCare;
