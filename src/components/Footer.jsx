function FooterLinkColumn({columnTitle, linkLists}) {
    const links = linkLists.map((obj) => {
        return <li className={columnTitle+'ListItem'} key={obj.title}>{obj.title}</li>;
    })
    return (
        <div className={columnTitle + 'container'}>
            <p className={columnTitle + 'Title' + ' ' + 'footerColumnTitle'}>{columnTitle}</p>
            <ul className={columnTitle + 'List'}>
                {links}
            </ul>
        </div>
    )
}

export function Footer() {
    const company = [
        {title: 'About Us', link: null},
        {title: 'News', link: null},
        {title: 'Careers', link: null},
        {title: 'Investors', link: null}
    ];

    const help = [
        {title: 'Contact Us', link: null},
        {title: 'Order Status', link: null},
        {title: 'Returns', link: null},
        {title: 'Payment Options', link: null},
        {title: 'Account', link: null},
    ]
    return (
        <div className="footer">
            <div className="footerLinks">
                <FooterLinkColumn columnTitle='Company' linkLists={company} />
                <FooterLinkColumn columnTitle='Help' linkLists={help} />
            </div>
        </div>
    )
}