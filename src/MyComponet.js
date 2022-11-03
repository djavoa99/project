import PropTypes from 'prop-types';

const MyComponent = ({ name, favoriteNumber, children }) => {
    return (
    <div>
    안녕하세요, 이름은 {name}입니다. <br />
    children 값은 {children}
    입니다.
    <br />
    제가 좋아하는 숫자는 {favoriteNumber}입니다.
    </div>
    );
}
MyComponent.defaultProps = {
    name : 'noNamed'
}
MyComponent.propsTypes = {
    name: PropTypes.string, // 컴포넌트의 필수 props를 지정하거나 props의 타입을 지정할 때 사용
    favoriteNumber : PropTypes.number.isRequired
};

export default MyComponent;