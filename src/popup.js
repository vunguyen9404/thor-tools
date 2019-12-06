'use strict';

import './popup.css';

var teamMembers = [
  {
    "id": "100042708771710",
    "name": "Trần Thanh Tùng"
  },
  {
    "id": "100042215024047",
    "name": "Luong Quang Anh"
  },
  {
    "id": "100041792864833",
    "name": "Phạm Thị Hiền"
  },
  {
    "id": "100040973031347",
    "name": "Bùi Văn Chương"
  },
  {
    "id": "100041324840566",
    "name": "Phạm Văn Dũng"
  },
  {
    "id": "100041483172772",
    "name": "Đặng Tuấn Mạnh"
  },
  {
    "id": "100041504562480",
    "name": "Pham Ngoc MInh"
  },
  {
    "id": "100039206090014",
    "name": "Nguyễn Văn Vũ"
  },
  {
    "id": "100038780143367",
    "name": "Hoàng Thị Thảo"
  },
  {
    "id": "100038111835489",
    "name": "Hoàng Quốc Huy"
  },
  {
    "id": "100035584371123",
    "name": "Nguyễn Đức Thắng"
  },
  {
    "id": "100035521240354",
    "name": "Nguyễn Thị Huyền Trang"
  },
  {
    "id": "100034734091665",
    "name": "Phan Hoàng Long"
  },
  {
    "id": "100033040152590",
    "name": "Nguyễn Tiến Anh"
  },
  {
    "id": "100029217756538",
    "name": "Nguyễn Trường Giang"
  },
  {
    "id": "100028653420382",
    "name": "Đào Mạnh Tuấn"
  },
  {
    "id": "100028470545326",
    "name": "Nguyễn Thị Lệ"
  },
  {
    "id": "100028061796140",
    "name": "Nguyễn Sỹ Tuấn"
  },
  {
    "id": "100023565023183",
    "name": "Đặng Đình Dương"
  },
  {
    "id": "100025593033330",
    "name": "Nguyễn Xuân Tú"
  },
  {
    "id": "100025582625198",
    "name": "Hữu Hưởng Nguyễn"
  },
  {
    "id": "100022122040233",
    "name": "Đào Quang Linh"
  },
  {
    "id": "100021881294227",
    "name": "Hà Thanh Sơn"
  }
];

function exportExcel() {
      var membersWs = XLSX.utils.json_to_sheet(teamMembers);
      var wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, membersWs, 'Thành viên trong team');  

      // export Excel file
      XLSX.writeFile(wb, 'team-members.xlsx');
    
};

function getListComments() {
    // active tab by sending a message
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    const tab = tabs[0];

    chrome.tabs.sendMessage(tab.id,{ type: 'GET_LIST_COMMENT'},response => {

    });
  });
};

$(document).ready(() => {
  $("#btnGetListComment").click(() => {
    exportExcel();
  })
})

  // function setupCounter(initialValue = 0) {
  //   document.getElementById('counter').innerHTML = initialValue;

  //   document.getElementById('incrementBtn').addEventListener('click', () => {
  //     updateCounter({
  //       type: 'INCREMENT',
  //     });
  //   });

  //   document.getElementById('decrementBtn').addEventListener('click', () => {
  //     updateCounter({
  //       type: 'DECREMENT',
  //     });
  //   });
  // }

  // function updateCounter({ type }) {
  //   counterStorage.get(count => {
  //     let newCount;

  //     if (type === 'INCREMENT') {
  //       newCount = count + 1;
  //     } else if (type === 'DECREMENT') {
  //       newCount = count - 1;
  //     } else {
  //       newCount = count;
  //     }

  //     counterStorage.set(newCount, () => {
  //       document.getElementById('counter').innerHTML = newCount;

  //       // Communicate with content script of
  //       // active tab by sending a message
  //       chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
  //         const tab = tabs[0];

  //         chrome.tabs.sendMessage(
  //           tab.id,
  //           {
  //             type: 'COUNT',
  //             payload: {
  //               count: newCount,
  //             },
  //           },
  //           response => {
  //             console.log('Current count value passed to contentScript file');
  //           }
  //         );
  //       });
  //     });
  //   });
  // }

  // function restoreCounter() {
  //   // Restore count value
  //   counterStorage.get(count => {
  //     if (typeof count === 'undefined') {
  //       // Set counter value as 0
  //       counterStorage.set(0, () => {
  //         setupCounter(0);
  //       });
  //     } else {
  //       setupCounter(count);
  //     }
  //   });
  // }

  // document.addEventListener('DOMContentLoaded', restoreCounter);
