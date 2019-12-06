'use strict';


function getListComment() {
  var listComments = $("._6ssm > a._3_qk._6ssj._42ft + ul > li");
  return listComments.map( (index, comment) => {
    var commentRaw = {};
    commentRaw.name = $(comment).find("a._6svv")[0].innerHTML;
    commentRaw.avatar = $(comment).find("img._3me-._3mf2.img").attr("src");
    commentRaw.profileUrl = $(comment).find("a._6svv").attr("href");
    commentRaw.profileId = commentRaw.profileUrl.match(/id=([^&]+)/)[1];
    commentRaw.timeString = $(comment).find("a._6svs > abbr").data("tooltip-content");
    commentRaw.timeAgo = $(comment).find("span.timestampContent")[0].innerHTML;
    commentRaw.shortComment = $(comment).find("span._3l3x._1n4g")[0].innerHTML;

    return commentRaw;
  });
}

// Listen for message
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'GET_LIST_COMMENT') {
    var listComments = getListComment();
    sendResponse({listComments});
    return true;
  };
  return true;
});
