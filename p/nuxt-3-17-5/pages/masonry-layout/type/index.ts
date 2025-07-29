// 1, APK游戏卡片
// 2, UGC游戏卡片
// 3, 图片
// 4, 视频
// 6, 穿搭卡片
// 7, 话题
// 8, 拍剧卡片
// 10, @好友
export type ResourceCodeType = 1 | 2 | 3 | 4 | 6 | 7 | 8 | 10;

export interface MediaType {
    resourceType: ResourceCodeType;
    resourceValue?: string;
    cover?: string;
    resourceHeight?: number;
    resourceWidth?: number;
    offset?: number;
    length?: number;
    uid?: number;
}

export interface CommentInfo {
    commentId: string;
    uid: string;
    likeCount: number;
    content: string;
    commentTime: string;
    opinion: number;
    nickname: string;
    avatar: string;
    floor: number;
}

export interface PostInfo {
    postId: string;
    resId: string;
    pack: string;
    likeCount: number;
    opinion: number;
    commentCount: number;
    uid: string;
    nickname: string;
    uname: string;
    avatar: string;
    uportrait: string;
    circleId: string;
    circleName: string;
    gameCircleId: string;
    gameCircleName: string;
    title: string;
    createTime: string;
    lastDiscussionTime: string;
    content: string;
    clickCount: number;
    top: boolean;
    shareCount: number;
    followStatus: boolean;
    essence: boolean;
    contentParseVesrion: number;
    topCommentList: CommentInfo[];
    tagList: {
        tagId: string;
        tagName: string;
    }[];
    mediaList: MediaType[];
    labelInfo: {
        name: string;
        icon: string;
        scope: number;
        endTime: string;
        type: 0 | 1;
        extendDTO?: {
            bgColor?: string;
            textColor?: string;
        };
    };
    // 来自于搜索的数据
    circle?: {
        name?: string;
    };
}

export interface PostResult {
    total: number;
    first: boolean;
    end: boolean;
    dataList: PostInfo[];
}