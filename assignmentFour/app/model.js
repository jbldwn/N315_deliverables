var MODEL = (function() {
    var homePageInfo = `<section class="home margin">
    <h1 class="txt_header txt-sizeL txt-colorPrpl">Spirits be with you</h1>
    <div class="hero txt-colorWht txt_paragraph">
        <h2 class="txt-sizeM">Bubble, Bubble, Toil and Trouble</h2>
        <div class="content">
            <p class="txt-sizeXS">Wavelength philosophical atoms gaia physics emotional constellation galactic flow. Existence planets brain, spiritual frequency time constellation relations sun human time. Solar hubble existence concepts, health electromagnetic constellation spatial spirituality spacetime objects solar. Intelligence time earth wellbeing mercury stellar pleiades spatial spirituality. Electromagnetic brain solar gaia emotional sirius spiritual, mercury magic spectrum light formation matrix. Sirius intelligence goddess flow psychology cognitive existence space spiritual, planets magic positive psychology. Mind galactic brain heal cognitive positive experience technology. Spacetime solar concepts relativity century galaxies emotional solar consciousness. Frequency time constellation relations sun human time. Solar hubble existence concepts, health electromagnetic constellation spatial spirituality spacetime objects solar. Intelligence time earth wellbeing mercury stellar pleiades spatial spirituality. Electromagnetic brain solar gaia emotional sirius spiritual, mercury magic spectrum light formation matrix. Heart materialist concepts electromagnetic star matrix emotional good, jupiter geometry spirit galactic.  Heart materialist concepts electromagnetic star matrix emotional good, jupiter geometry spirit galactic. </p>
            <p class="txt-sizeXS">Sirius intelligence goddess flow psychology cognitive existence space spiritual, planets magic positive psychology. Mind galactic brain heal cognitive positive experience technology. Spacetime solar concepts relativity century galaxies emotional solar consciousness. Wavelength philosophical atoms gaia physics emotional constellation galactic flow. Existence planets brain, spiritual frequency time constellation relations sun human time. Solar hubble existence concepts, health electromagnetic constellation spatial spirituality spacetime objects solar. Intelligence time earth wellbeing mercury stellar pleiades spatial spirituality. Electromagnetic brain solar gaia emotional sirius spiritual, mercury magic spectrum light formation matrix. Heart materialist concepts electromagnetic star matrix emotional good, jupiter geometry spirit galactic. frequency time constellation relations sun human time. Solar hubble existence concepts, health electromagnetic constellation spatial spirituality spacetime objects solar. Intelligence time earth wellbeing mercury stellar pleiades spatial spirituality. Electromagnetic brain solar gaia emotional sirius spiritual, mercury magic spectrum light formation matrix. Heart materialist concepts electromagnetic star matrix emotional good, jupiter geometry spirit galactic.</p>
        </div>
    </div>
</section>`;
    var aboutPageInfo = `    <section class="about margin">
    <h1 class="txt_header txt-sizeL txt-colorPrpl">Our Origins</h1>
    <div class="hero txt-colorWht txt_paragraph">
        <h2 class="txt-sizeM">Come hither, sweet child.</h2>
        <div class="content">
            <p class="txt-sizeXS">Existence planets brain, spiritual frequency time constellation relations sun human time. Intelligence time earth wellbeing mercury stellar pleiades spatial spirituality. Electromagnetic brain solar gaia emotional sirius spiritual, mercury magic spectrum light formation matrix. Mind galactic brain heal cognitive positive experience technology.  Intelligence time earth wellbeing mercury stellar pleiades spatial spirituality. Electromagnetic brain solar gaia emotional sirius spiritual, mercury magic spectrum light formation matrix. Heart materialist concepts electromagnetic star matrix emotional good, jupiter geometry spirit galactic.  Heart materialist concepts electromagnetic star matrix emotional good, jupiter geometry spirit galactic. </p>
            <div class="collage">
                <div class="top">
                    <div class="left left1"></div>
                    <div class="right right1"></div>
                </div>
                <div class="bottom bottom1"></div>
            </div>
            <div class="collage">
                <div class="bottom bottom2"></div>

                <div class="top">
                    <div class="left left2"></div>
                    <div class="right right2"></div>
                </div>
            </div>
            <p class="txt-sizeXS">Mind galactic brain heal cognitive positive experience technology. Spacetime solar concepts relativity century galaxies emotional solar consciousness. Wavelength philosophical atoms gaia physics emotional constellation galactic flow. Intelligence time earth wellbeing mercury stellar pleiades spatial spirituality. Heart materialist concepts electromagnetic star matrix emotional good, jupiter geometry spirit galactic. Electromagnetic brain solar gaia emotional sirius spiritual, mercury magic spectrum light formation matrix. Heart materialist concepts electromagnetic star matrix emotional good, jupiter geometry spirit galactic.</p>
            
        </div>
    </div>
</section>`;


var _getNavVar = function(navID){
    //retrieve content
    let pageInfo = `${navID}PageInfo`;
    $('#display').html(eval(pageInfo));  
};
return{
    getNavVar: _getNavVar, 
}
})();
