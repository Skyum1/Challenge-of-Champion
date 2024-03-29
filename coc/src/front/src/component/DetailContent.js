import React from "react";
import Reply from "./Reply";

const DetailContent = () => {
    return (
        <div className="detailContent">
            <div className="d-flex">
                <img src="/img/sample.jpg" className="contentProfileImg"/>
                <div className="profileDesc d-flex">
                    <div className="profileName">대한민국</div>
                    <div className="contentDate right-align-container"> 2024/01/01 </div>
                </div>
            </div>
            <div>
                <div>메밀꽃 필 무렵<br></br>여름장이란 애시당초 글러서 해는 아직 중천에 있건만 장판은 벌써 쓸쓸하고 더운 햇발이 벌려 놓은 전시장 밑으로 등줄기를 훅훅 볶는다. </div>
                <img src="/img/sampleContent.jpg" className="contentImg"/>
            </div>

            <div className="d-flex detailCnt">
                <div class="float-start detailLike">
                    좋아요
                </div >
                <div class="float-none detailComment">
                    댓글
                </div>
                <div class="float-end detailView">
                    조회 수
                </div>
            </div>

            <div>
                <Reply/>
                <Reply/>
            </div>
        </div>
    );
};

export default DetailContent;