interface PartnershipProps {
    name: string;
    url: string;
}

export default function Partnership({ name, url }: PartnershipProps) {
    return (
        <div
            style={{
                height: '300px',
                width: '300px',
                backgroundColor: '#FFF',
                padding: '15px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <img width={'100%'} src={url} alt={name} />
        </div>
    );
}
