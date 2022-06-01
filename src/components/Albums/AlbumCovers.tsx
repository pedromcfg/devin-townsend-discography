const importAll = (r: __WebpackModuleApi.RequireContext) => 
{
    let images:any = {};
    r.keys().map((item:string) => 
        images[item.replace('./', '')] = r(item));
    return images;
}

const albumCovers: any = importAll(require.context('../img/albums', false, /\.jpg/));


export default albumCovers;