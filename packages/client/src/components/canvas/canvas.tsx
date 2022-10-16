import React, { useRef, useEffect } from 'react';

export function CanvasComponent() {
    const ref = useRef(null);
  
    useEffect(() => {
        const card = new Image();

        function init() {
            card.src = "data:image/svg+xml,%3Csvg width='472' height='303' viewBox='0 0 472 303' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg filter='url(%23filter0_ddd_70_437)'%3E%3Crect x='27' y='27' width='420' height='251' rx='14' fill='%23E3EDF7'/%3E%3Crect x='27' y='27' width='420' height='251' rx='14' fill='url(%23paint0_linear_70_437)'/%3E%3Crect x='26.5' y='26.5' width='421' height='252' rx='14.5' stroke='url(%23paint1_linear_70_437)' stroke-opacity='0.46'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_ddd_70_437' x='0' y='0' width='472' height='303' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset dx='4' dy='4'/%3E%3CfeGaussianBlur stdDeviation='10'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0.434896 0 0 0 0 0.548322 0 0 0 0 0.690104 0 0 0 0.41 0'/%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_70_437'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset dx='-6' dy='-6'/%3E%3CfeGaussianBlur stdDeviation='10'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0'/%3E%3CfeBlend mode='normal' in2='effect1_dropShadow_70_437' result='effect2_dropShadow_70_437'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset dx='2' dy='2'/%3E%3CfeGaussianBlur stdDeviation='2'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0.446076 0 0 0 0 0.558333 0 0 0 0 0.67059 0 0 0 0.1 0'/%3E%3CfeBlend mode='normal' in2='effect2_dropShadow_70_437' result='effect3_dropShadow_70_437'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect3_dropShadow_70_437' result='shape'/%3E%3C/filter%3E%3ClinearGradient id='paint0_linear_70_437' x1='437.204' y1='271.983' x2='274.97' y2='56.2082' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='white' stop-opacity='0.53'/%3E%3Cstop offset='1' stop-color='white' stop-opacity='0'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear_70_437' x1='427.556' y1='263.235' x2='103.314' y2='285.766' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23D6E3F3'/%3E%3Cstop offset='1' stop-color='white'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E";
            window.requestAnimationFrame(draw);
        }
        function draw() {
            const time = new Date();
            console.log(time.getMilliseconds());
            ctx.globalCompositeOperation = 'destination-over';
            ctx.clearRect(0, 0, 500, 400); // clear canvas

            drawCard(card, 1);
            drawCard(card, .85);
            drawCard(card, .72);
            //  ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
            window.requestAnimationFrame(draw);
        }
        function drawCard(card:HTMLImageElement, scale:number) { // scale -1 0 1   0 - center
            const x = 15;
            const y = 15;
            const width = 420;
            const height = 260;
            const centrX = x + width / 2;
            const centrY = y + height / 2;

            console.log( scale, centrX - ( scale * width / 2 ), centrY - ( scale * height / 2 ) + (1 - scale) * 100, centrX + ( scale * width / 2 ), centrY + ( scale * height / 2) + (1 - scale) * 100 );
            ctx.drawImage(card, 
                centrX - ( scale * width / 2 ) - (1 - scale) * 100,
                centrY - ( scale * height / 2 ) + (1 - scale) * 50, 
                centrX + ( scale * width / 2 ), 
                centrY + ( scale * height / 2) + (1 - scale) * 50 
            );

        }

        /*

            20 20 460 400
            48 42 33 416 387.33333333333337
            48 64 46 372 378

        */
        const canvas:HTMLCanvasElement = ref.current!;
        const ctx = canvas.getContext('2d')!;
        init();

        }, []);

    return (
      <canvas ref={ref} id="round-game" width={460} height={350}/>
    );

}