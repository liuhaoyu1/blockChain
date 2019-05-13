import React, { PureComponent } from 'react';
import { 
    View,
    Text, 
    Image,
    Dimensions,
    SectionList,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-navigation'
import { connect } from 'react-redux'
import {
    REQUEST_MEMBER_ADD,
} from '../redux/actions/actionTypes';
import Letter from 'en-letter'
import  styles from './style'
const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 }
  ];
  let testData = [
    {name: '盖伦'},
    {name: '崔丝塔娜'},
    {name: "大发明家"},
    {name: '武器大师'},
    {name: "武器大师"},
    {name: '刀妹'},
    {name: "卡特琳娜"},
    {name: '盲僧'},
    {name: "蕾欧娜"},
    {name: "拉克丝"},
    {name: "剑圣"},
    {name: "赏金"},
    {name: "发条"},
    {name: "瑞雯"},
    {name: "提莫"},
    {name: "卡牌"},
    {name: "剑豪"},
    {name: "琴女"},
    {name: "木木"},
    {name: "雪人"},
    {name: "安妮"},
    {name: "薇恩"},
    {name: "小法师"},
    {name: "艾尼维亚"},
    {name: "奥瑞利安索尔"},
    {name: "布兰德"},
    {name: "凯特琳"},
    {name: "虚空"},
    {name: "机器人"},
    {name: "挖掘机"},
    {name: "EZ"},
    {name: "暴走萝莉"},
    {name: "艾克"},
    {name: "波比"},
    {name: "赵信"},
    {name: "牛头"},
    {name: "九尾"},
    {name: "菲兹"},
    {name: "寒冰"},
    {name: "猴子"},
    {name: "深渊"},
    {name: "凯南"},
    {name: "诺克萨斯"},
    {name: "祖安"},
    {name: "德莱文"},
    {name: "德玛西亚王子"},
    {name: "豹女"},
    {name: "皮城执法官"},
    {name: "泽拉斯"},
    {name: "岩雀"},
  ]
// 模拟添加折线图
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory-native';
class Home extends PureComponent {
    static navigationOptions = ({ navigation }) => {
        return {
          header: null,
        }
      }

    constructor(props) {
        super(props)
        
    }

    state = {
        token: '',
        letterArr: [],
        sections: [],       //section数组
        showIndex: -1,
    }

    componentWillMount() {

        let list = testData;
        let sections = [], letterArr = [];
        list.map((item, index) => {
            letterArr.push(Letter(item.name).substring(0,1));
            letterArr = [...new Set(letterArr)].sort()
            this.setState({letterArr: letterArr})
        })

        letterArr.map((item, index) => {
            sections.push({
                title: item,
                data: []
            })
        })

        list.map((item,index) => {
            let listItem = item;
            sections.map(item => {
                let first = listItem.name.substring(0,1);
                let test = Letter(first);
                if (item.title == test) {
                    item.data.push({name: listItem.name});
                  }

            })

        })
        this.setState({sections: sections})


    }

    componentDidMount() {
        console.log(this.state.letterArr)
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.token !== nextProps.token && !!nextProps.token) {
            this.setState({
                token: nextProps.token
            })
          }
    }

    onAdd() {
        this.props.getOnAdd('3412341234124124123')
    }
    // 字母关联分组跳转
  _onSectionselect = (key) => {
    console.log({key})
    this.refs._sectionList.scrollToLocation({
      itemIndex: 0,
      sectionIndex: key,
      viewOffset: 30,
    })

  };
    // 分组列表的头部
  _renderSectionHeader(sectionItem) {
    const {section} = sectionItem;
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderLetter}>{section.title.toUpperCase()}</Text>
      </View>
    );
  }
  // 分组列表的renderItem
  _renderItem(item, index) {
    const {showIndex} = this.state;
    return (
      <TouchableOpacity
        style={
          styles.sectionItem
        }
        activeOpacity={.75}
        onPress={() => {
          this.setState({
            showIndex: item.name,
          });
        }}
      >
        <View style={styles.sectionItemText}>
          <View>
            <Text style={styles.nameStyle}>{item.name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

    render() {
        const {letterArr, sections} = this.state;
        // 偏移量
        const top_offset = (Dimensions.get('window').height - letterArr.length ) / 2;

        return (
            <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center',position: 'relative'}}>
                <SectionList
                    ref="_sectionList"
                    style={styles.section}
                    renderItem={({item, index}) => this._renderItem(item, index)}
                    renderSectionHeader={this._renderSectionHeader}
                    sections={sections}
                    keyExtractor={(item, index) => item + index}
                    ItemSeparatorComponent={() => <View
                        style={{height: 1,backgroundColor: '#ddd'}}/>}
                />

            {/*右侧字母栏*/}
            <View style={{
                position: 'absolute', right: 0
            }}>
              <FlatList
                data={letterArr}
                keyExtractor={(item, index) => index.toString()}      
                renderItem={({item, index}) =>
                  <TouchableOpacity
                    style={{height: 20,width: 40,textAlign: 'right',paddingRight: 10,}}
                    onPress={() => {
                      this._onSectionselect(index)
                    }}
                  >
                    <Text style={styles.letter}>{item.toUpperCase()}</Text>
                  </TouchableOpacity>
                }
              />
            </View>
            </SafeAreaView>
        )
    }

}

const mapStateToProps = (state) => {
    console.log('state:',state.HomePageState)
    return {
        token: state.HomePageState.token
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getOnAdd:(payload)=>dispatch({type:REQUEST_MEMBER_ADD,payload})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);