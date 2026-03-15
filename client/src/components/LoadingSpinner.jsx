const LoadingSpinner = () => (
  <div style={{ display: 'grid', placeItems: 'center', padding: '40px' }}>
    <div style={{ width: 48, height: 48, borderRadius: '50%', border: '3px solid rgba(255,31,77,0.4)', borderTopColor: 'var(--color-blue)', animation: 'spin 1s linear infinite' }} />
    <style>{`@keyframes spin { to { transform: rotate(360deg);} }`}</style>
  </div>
);
export default LoadingSpinner;

